import PdfViewer from '../components/PdfViewer';

export default function PdfPage() {
    const pdfFile = `${import.meta.env.BASE_URL}PrivacyPolicy_WobblePop_Dropkick.pdf`;
    return <PdfViewer file={pdfFile} />;
}