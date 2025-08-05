interface PdfViewerProps {
    file: string;
}

export default function PdfViewer({ file }: PdfViewerProps) {
    return (
        <div className="w-full h-screen">
            <iframe
                src={file}
                title="PDF Document"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
        </div>
    );
}