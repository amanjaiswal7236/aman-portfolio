"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Terminal, Github, ExternalLink, Copy, Check } from "lucide-react"

export default function TerminalPortfolio() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [currentSection, setCurrentSection] = useState("welcome")
  const [isTyping, setIsTyping] = useState(false)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands = {
    help: "Show available commands",
    about: "Display personal information",
    education: "Show educational background",
    skills: "List technical skills",
    experience: "Display work experience",
    projects: "Show featured projects",
    achievements: "Display achievements and certifications",
    contact: "Show contact information",
    clear: "Clear terminal",
    whoami: "Display current user info",
    ls: "List available sections",
    cat: "Read file contents (e.g., cat resume.txt)",
  }

  const typeWriter = (text: string, callback?: () => void) => {
    setIsTyping(true)
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setCurrentCommand((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
        setIsTyping(false)
        if (callback) callback()
      }
    }, 50)
  }

  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    setCommandHistory((prev) => [...prev, `$ ${cmd}`])

    switch (command) {
      case "help":
        setCommandHistory((prev) => [
          ...prev,
          "Available commands:",
          ...Object.entries(commands).map(([cmd, desc]) => `  ${cmd.padEnd(12)} - ${desc}`),
        ])
        break
      case "about":
      case "whoami":
        setCurrentSection("about")
        break
      case "education":
        setCurrentSection("education")
        break
      case "skills":
        setCurrentSection("skills")
        break
      case "experience":
        setCurrentSection("experience")
        break
      case "projects":
        setCurrentSection("projects")
        break
      case "achievements":
        setCurrentSection("achievements")
        break
      case "contact":
        setCurrentSection("contact")
        break
      case "clear":
        setCommandHistory([])
        setCurrentSection("welcome")
        break
      case "ls":
        setCommandHistory((prev) => [
          ...prev,
          "drwxr-xr-x  2 aman aman 4096 Nov 28 23:34 about/",
          "drwxr-xr-x  2 aman aman 4096 Nov 28 23:34 education/",
          "drwxr-xr-x  2 aman aman 4096 Nov 28 23:34 skills/",
          "drwxr-xr-x  2 aman aman 4096 Nov 28 23:34 experience/",
          "drwxr-xr-x  2 aman aman 4096 Nov 28 23:34 projects/",
          "drwxr-xr-x  2 aman aman 4096 Nov 28 23:34 achievements/",
          "-rw-r--r--  1 aman aman 2048 Nov 28 23:34 resume.txt",
          "-rw-r--r--  1 aman aman 1024 Nov 28 23:34 contact.txt",
        ])
        break
      case "cat resume.txt":
        setCurrentSection("resume")
        break
      default:
        setCommandHistory((prev) => [...prev, `Command not found: ${cmd}. Type 'help' for available commands.`])
    }
    setCurrentCommand("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentCommand.trim()) {
      executeCommand(currentCommand)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory, currentSection])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const renderSection = () => {
    switch (currentSection) {
      case "welcome":
        return (
          <div className="space-y-4">
            <pre className="text-green-400 text-sm">
              {`
 █████╗ ███╗   ███╗ █████╗ ███╗   ██╗
██╔══██╗████╗ ████║██╔══██╗████╗  ██║
███████║██╔████╔██║███████║██╔██╗ ██║
██╔══██║██║╚██╔╝██║██╔══██║██║╚██╗██║
██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║
╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
`}
            </pre>
            <div className="text-amber-400">
              <p>Welcome to Aman Jaiswal's Terminal Portfolio</p>
              <p>Full Stack Developer & Problem Solver</p>
              <p className="mt-2 text-gray-400">Type 'help' to see available commands</p>
            </div>
          </div>
        )

      case "about":
        return (
          <div className="space-y-2">
            <p className="text-green-400">╭─ About Aman Jaiswal</p>
            <p className="text-white">├─ Name: Aman Jaiswal</p>
            <p className="text-white">├─ Role: Full Stack Developer</p>
            <p className="text-white">├─ Location: Bhubaneswar, India</p>
            <p className="text-white">├─ Education: BTech IT @ IIIT Bhubaneswar</p>
            <p className="text-white">├─ GPA: 8.5/10.0</p>
            <p className="text-white">├─ Status: Student & Developer</p>
            <p className="text-green-400">╰─ Passionate about building scalable web applications</p>
          </div>
        )

      case "education":
        return (
          <div className="space-y-4">
            <div className="border border-green-500 p-4 rounded">
              <p className="text-green-400 font-bold">🎓 BTech Information Technology</p>
              <p className="text-white">International Institute of Information and Technology, Bhubaneswar</p>
              <p className="text-gray-400">Expected: June 2026 | GPA: 8.5/10.0</p>
            </div>
            <div className="border border-blue-500 p-4 rounded">
              <p className="text-blue-400 font-bold">🏫 High School + Intermediate</p>
              <p className="text-white">Azamgarh Public School, Azamgarh</p>
              <p className="text-gray-400">June 2022 | 94.2%, 95.4%</p>
            </div>
          </div>
        )

      case "skills":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-yellow-500 p-4 rounded">
                <p className="text-yellow-400 font-bold mb-2">💻 Languages</p>
                <div className="flex flex-wrap gap-1">
                  {["C/C++", "Python", "JavaScript", "TypeScript", "HTML/CSS"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-yellow-500 text-yellow-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="border border-purple-500 p-4 rounded">
                <p className="text-purple-400 font-bold mb-2">🛠️ Frameworks</p>
                <div className="flex flex-wrap gap-1">
                  {["React", "Node.js", "Express.js", "Next.js", "Tailwind"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-purple-500 text-purple-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="border border-cyan-500 p-4 rounded">
                <p className="text-cyan-400 font-bold mb-2">🗄️ Databases</p>
                <div className="flex flex-wrap gap-1">
                  {["MySQL", "MongoDB"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-cyan-500 text-cyan-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="border border-red-500 p-4 rounded">
                <p className="text-red-400 font-bold mb-2">⚙️ Tools</p>
                <div className="flex flex-wrap gap-1">
                  {["Git/GitHub", "VS Code", "Postman"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-red-500 text-red-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "experience":
        return (
          <div className="space-y-4">
            <div className="border border-green-500 p-4 rounded">
              <p className="text-green-400 font-bold">💼 Full Stack Intern @ Goloka IT</p>
              <p className="text-gray-400 mb-2">Aug 2024 - Sep 2024</p>
              <ul className="text-white space-y-1 text-sm">
                <li>• Engineered scalable web applications with React & Node.js</li>
                <li>• Designed responsive UIs with Ant Design</li>
                <li>• Integrated RESTful APIs and managed state with Redux</li>
                <li>• Deployed applications using AWS for scalability</li>
              </ul>
            </div>
            <div className="border border-orange-500 p-4 rounded">
              <p className="text-orange-400 font-bold">🎯 Event Coordinator Lead</p>
              <p className="text-gray-400 mb-2">Feb 2024 - Present</p>
              <ul className="text-white space-y-1 text-sm">
                <li>• Organized Tech Talk on cybersecurity (100+ attendees)</li>
                <li>• Increased event participation by 30%</li>
                <li>• Coordinated logistics and marketing efforts</li>
              </ul>
            </div>
          </div>
        )

      case "projects":
        return (
          <div className="space-y-4">
            <div className="border border-blue-500 p-4 rounded">
              <div className="flex justify-between items-start mb-2">
                <p className="text-blue-400 font-bold">🎥 StreamIt</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-blue-500 text-blue-400 h-6 text-xs">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="border-blue-500 text-blue-400 h-6 text-xs">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live
                  </Button>
                </div>
              </div>
              <p className="text-white text-sm mb-2">Live streaming platform with real-time capabilities</p>
              <p className="text-green-400 text-xs">Next.js • TypeScript • MySQL • Prisma • LiveKit</p>
              <p className="text-gray-400 text-xs mt-1">50% faster data retrieval • 1M+ viewers • 4K support</p>
            </div>

            <div className="border border-purple-500 p-4 rounded">
              <div className="flex justify-between items-start mb-2">
                <p className="text-purple-400 font-bold">💬 ChatApp</p>
                <Button size="sm" variant="outline" className="border-purple-500 text-purple-400 h-6 text-xs">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </Button>
              </div>
              <p className="text-white text-sm mb-2">Real-time messaging with WebSocket communication</p>
              <p className="text-green-400 text-xs">React • Socket.io • Node.js • Express • Redux</p>
            </div>

            <div className="border border-yellow-500 p-4 rounded">
              <div className="flex justify-between items-start mb-2">
                <p className="text-yellow-400 font-bold">⚡ Project Generator</p>
                <Button size="sm" variant="outline" className="border-yellow-500 text-yellow-400 h-6 text-xs">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </Button>
              </div>
              <p className="text-white text-sm mb-2">CLI tool for generating starter projects</p>
              <p className="text-green-400 text-xs">Node.js • NPM • JavaScript</p>
            </div>
          </div>
        )

      case "achievements":
        return (
          <div className="space-y-4">
            <div className="border border-cyan-500 p-4 rounded">
              <p className="text-cyan-400 font-bold">🏆 Microsoft Learn Student Ambassador</p>
              <p className="text-white text-sm">Beta Member - Organizing workshops and mentoring peers</p>
            </div>
            <div className="border border-green-500 p-4 rounded">
              <p className="text-green-400 font-bold">🧩 Problem Solving Champion</p>
              <p className="text-white text-sm">450+ LeetCode problems • 1st position @ BGU Bhubaneswar</p>
            </div>
            <div className="border border-orange-500 p-4 rounded">
              <p className="text-orange-400 font-bold">🌟 GSSOC Contributor</p>
              <p className="text-white text-sm">Enhanced password validation • PR #113</p>
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-4">
            <div className="border border-green-500 p-4 rounded">
              <p className="text-green-400 font-bold mb-4">📞 Contact Information</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white">📧 Email:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">amanjaiswal7236@gmail.com</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard("amanjaiswal7236@gmail.com")}
                      className="h-6 w-6 p-0"
                    >
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">📱 Phone:</span>
                  <span className="text-gray-400">+91 7236906064</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">💼 LinkedIn:</span>
                  <a href="https://linkedin.com/in/amanjaiswal7236" className="text-blue-400 hover:underline">
                    /in/amanjaiswal7236
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">🐙 GitHub:</span>
                  <a href="https://github.com/amanjaiswal7236" className="text-blue-400 hover:underline">
                    /amanjaiswal7236
                  </a>
                </div>
              </div>
            </div>
          </div>
        )

      case "resume":
        return (
          <div className="space-y-2 text-sm">
            <p className="text-green-400">Reading file: resume.txt</p>
            <div className="border border-gray-500 p-4 rounded bg-gray-900">
              <pre className="text-gray-300 whitespace-pre-wrap">
                {`AMAN JAISWAL
Full Stack Developer & Problem Solver
Email: amanjaiswal7236@gmail.com
Phone: +91 7236906064
GitHub: github.com/amanjaiswal7236
LinkedIn: linkedin.com/in/amanjaiswal7236

EDUCATION
- BTech IT @ IIIT Bhubaneswar (2026) - GPA: 8.5/10.0
- High School @ Azamgarh Public School (2022) - 94.2%, 95.4%

EXPERIENCE
- Full Stack Intern @ Goloka IT (Aug-Sep 2024)
- Event Coordinator Lead (Feb 2024 - Present)

SKILLS
Languages: C/C++, Python, JavaScript/TypeScript, HTML/CSS
Frameworks: React, Node.js, Express.js, Next.js, Tailwind
Databases: MySQL, MongoDB
Tools: Git/GitHub, VS Code, Postman

PROJECTS
- StreamIt: Live streaming platform (Next.js, TypeScript, MySQL)
- ChatApp: Real-time messaging (React, Socket.io, Node.js)
- Project Generator: CLI tool (Node.js, NPM)

ACHIEVEMENTS
- Microsoft Learn Student Ambassador (Beta)
- 450+ LeetCode problems solved
- GSSOC Open Source Contributor`}
              </pre>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="container mx-auto p-4 max-w-6xl">
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Terminal className="h-4 w-4" />
            <span className="text-gray-300 text-sm">aman@portfolio:~$</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div ref={terminalRef} className="bg-black rounded-b-lg p-4 h-[80vh] overflow-y-auto border border-gray-700">
          {/* Command History */}
          <div className="space-y-1 mb-4">
            {commandHistory.map((line, index) => (
              <div key={index} className="text-gray-300">
                {line}
              </div>
            ))}
          </div>

          {/* Current Section Content */}
          {renderSection()}

          {/* Command Input */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-green-400">aman@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent border-none outline-none text-white flex-1"
              placeholder="Type a command..."
              disabled={isTyping}
            />
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
        </div>

        {/* Quick Commands */}
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.keys(commands)
            .slice(0, 8)
            .map((cmd) => (
              <Button
                key={cmd}
                size="sm"
                variant="outline"
                onClick={() => executeCommand(cmd)}
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
              >
                {cmd}
              </Button>
            ))}
        </div>
      </div>
    </div>
  )
}
