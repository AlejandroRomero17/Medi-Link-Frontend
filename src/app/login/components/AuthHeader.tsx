import { Heart } from "lucide-react";

export const AuthHeader = () => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center gap-2 mb-6">
      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
        <Heart className="h-7 w-7 text-white" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">CliniData</h1>
        <p className="text-sm text-gray-500">ECNT</p>
      </div>
    </div>
  </div>
);
