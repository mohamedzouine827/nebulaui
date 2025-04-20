"use client"

import React, { useState } from "react"
import { Copy } from "lucide-react"

interface CodePreviewProps {
  title?: string
  previewText?: string
  codeText?: string
  code: string
  children: React.ReactNode
}

const CodePreview: React.FC<CodePreviewProps> = ({
  title,
  previewText = "Preview",
  codeText = "Code",
  code,
  children,
}) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full flex flex-col gap-4 py-8">
      {/* Title */}
      {title && (
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      )}

      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-2 ${
              activeTab === "preview"
                ? "border-b-2 border-black text-black font-medium"
                : "text-neutral-500"
            }`}
          >
            {previewText}
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-4 py-2 ${
              activeTab === "code"
                ? "border-b-2 border-black text-black font-medium"
                : "text-neutral-500"
            }`}
          >
            {codeText}
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 rounded transition"
        >
          {copied ? (
            <span className="text-xs text-green-500">✓</span>
          ) : (
            <Copy className="w-4 h-4 text-neutral-600" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="w-full border border-gray-300 rounded-md bg-white overflow-hidden min-h-[400px]">
        {activeTab === "preview" ? (
          <div className="w-full h-full flex items-center justify-center p-6">
            {children}
          </div>
        ) : (
          <pre className="w-full h-full p-6 text-sm text-gray-800 whitespace-pre-wrap overflow-auto">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

export default CodePreview
