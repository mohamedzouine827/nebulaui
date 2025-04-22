import CodePreview from "@/app/_component/components/CodePreview"
import FileUploader from "@/app/_component/components/FileUploader"

export default function FileUploaderDocs() {
  return (
    <div className="">
      {/* Page Heading */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">FileUploader</h2>
        <p className="text-muted-foreground">
          A multi-variant drag-and-drop file uploader with progress tracking and file type icons.
        </p>
      </div>

      {/* Default Usage */}
      <CodePreview
        title="Detailed"
        code={`<FileUploader variant="detailed" maxFileSize={10} acceptedFileTypes="image/*,application/pdf" />`}
      >
        <FileUploader
          variant="detailed"
          maxFileSize={10}
          acceptedFileTypes="image/*,application/pdf"
        />
      </CodePreview>

      {/* Variants */}
      <div className="space-y-6">
        <h4 className="text-xl font-semibold">Variants</h4>
        <div className="space-y-10">
          {["compact", "detailed", "minimal", "precise", "progressive"].map((variant) => (
            <CodePreview
              key={variant}
              title={variant.charAt(0).toUpperCase() + variant.slice(1)}
              code={`<FileUploader variant="${variant}" />`}
            >
              <FileUploader variant={variant as any} />
            </CodePreview>
          ))}
        </div>
      </div>
    </div>
  )
}
