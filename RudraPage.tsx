import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function RudraPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800 font-sans">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-2">Rudra</h1>
        <p className="text-lg">The name of power, control, and the storm.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 px-4 pb-8">
        <Card className="rounded-2xl p-4 shadow-lg">
          <Sparkles className="w-6 h-6 mb-2 text-blue-500" />
          <h2 className="text-xl font-semibold">Creator</h2>
          <p>Inspired by strength and spirit.</p>
        </Card>
      </div>
    </div>
  );
}