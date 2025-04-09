import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

export const CopyButton = ({ text }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<Button variant="ghost" size="icon" onClick={handleCopy} title="Copy">
			<Copy className="w-4 h-4" />
			<span className="sr-only">Copy</span>
		</Button>
	);
};
