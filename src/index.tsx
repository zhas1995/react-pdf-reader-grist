import { createRoot } from "react-dom/client";
import { App } from "./App";

// biome-ignore lint/style/noNonNullAssertion: Root element must be there
const container = document.getElementById("root")!;
grist.onRecord(async (record) => {
    const root = createRoot(container);
    console.log(JSON.stringify(record));
    if (record.pdfFileLoc) {
        root.render(<App testHighlights={
            JSON.parse(record.highlighted_data ?? "{}")}
            pdfFileLoc={record.pdfFileLoc}
            recordId={record.id}
        />);
    } else {
        root.unmount();
    }
})
