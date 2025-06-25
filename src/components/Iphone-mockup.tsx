import { Search, CreditCard, MessageCircle, ArrowRight } from "lucide-react";


export default function IphoneMockup() {
    return (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] aspect-[9/16] bg-black rounded-[3rem] p-3 shadow-2xl mx-auto">

            {/* Sombra adicional hacia la derecha */}
            <div className="absolute top-4 -right-8 w-[350px] aspect-[9/16] bg-black/20 rounded-[3rem] blur-xl -z-10"></div>
            <div className="absolute top-8 -right-16 w-[350px] aspect-[9/16] bg-black/10 rounded-[3rem] blur-2xl -z-20"></div>

            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 text-black text-sm font-medium">
                    <span>9:41</span>
                    <div className="w-6 h-3 bg-black rounded-full"></div>
                    <div className="flex gap-1">
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-6 h-2 bg-black rounded-sm"></div>
                    </div>
                </div>

                {/* App Header */}
                <div className="px-6 py-2 flex justify-between items-center">
                    <span className="text-black font-medium">Done</span>
                    <div className="flex gap-3">
                        <Search className="w-5 h-5 text-gray-600" />
                        <CreditCard className="w-5 h-5 text-gray-600" />
                        <MessageCircle className="w-5 h-5 text-gray-600" />
                    </div>
                </div>

                {/* Card */}
                <div className="px-6 py-4">
                    <div className="bg-gradient-to-br from-orange-300 via-pink-300 to-purple-300 rounded-2xl p-4 h-32 relative">
                        <div className="absolute top-3 left-3">
                            <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                        </div>
                        <div className="absolute bottom-3 right-3">
                            <div className="flex gap-1">
                                <div className="w-4 h-4 bg-white/40 rounded-full"></div>
                                <div className="w-4 h-4 bg-white/40 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Balance Info */}
                <div className="px-6 py-2 flex justify-between">
                    <div>
                        <div className="text-black text-sm">Card Balance</div>
                        <div className="text-black text-2xl font-bold">$1,682.55</div>
                        <div className="text-gray-500 text-xs">$8,317.45 Available</div>
                    </div>
                    <div>
                        <div className="text-black text-sm">Payment Due</div>
                        <div className="text-black text-2xl font-bold">Mar 31</div>
                    </div>
                </div>

                {/* Weekly Activity */}
                <div className="px-6 py-4">
                    <div className="text-black text-sm mb-2">Weekly Activity</div>
                    <div className="text-gray-500 text-xs mb-3">+$27.76 Daily Cash</div>
                    <div className="flex gap-1 h-8 items-end">
                        <div className="w-4 bg-orange-400 rounded-t" style={{ height: "60%" }}></div>
                        <div className="w-4 bg-yellow-400 rounded-t" style={{ height: "40%" }}></div>
                        <div className="w-4 bg-green-400 rounded-t" style={{ height: "80%" }}></div>
                        <div className="w-4 bg-blue-400 rounded-t" style={{ height: "70%" }}></div>
                        <div className="w-4 bg-purple-400 rounded-t" style={{ height: "50%" }}></div>
                        <div className="w-4 bg-pink-400 rounded-t" style={{ height: "90%" }}></div>
                        <div className="w-4 bg-red-400 rounded-t" style={{ height: "30%" }}></div>
                    </div>
                    <div className="bg-gray-100 rounded-xl px-3 py-2 mt-3 text-center">
                        <span className="text-black font-medium text-sm">Pay Early</span>
                    </div>
                </div>

                {/* Savings Account */}
                <div className="px-6 py-2">
                    <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">S</span>
                            </div>
                            <div>
                                <div className="text-black text-sm font-medium">Savings Account</div>
                                <div className="text-gray-500 text-xs">Current Balance: $2,106.19</div>
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                {/* Latest Transactions */}
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <span className="text-black font-medium">Latest Card Transactions</span>
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                            <div className="w-3 h-0.5 bg-gray-600"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}