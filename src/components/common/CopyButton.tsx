import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../../utils/copy';

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = 'Copiar' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150
        ${copied
          ? 'bg-green-100 text-green-700 border border-green-200'
          : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 hover:text-gray-900'
        }`}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? 'Copiado' : label}
    </button>
  );
}
