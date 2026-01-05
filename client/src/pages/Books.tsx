import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, BookOpen, Download, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Book {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: string;
    coverColor: string;
}

const BOOKS: Book[] = [
    {
        id: 1,
        title: "The Intelligent Trader",
        description: "Master the psychology of trading and risk management strategies used by pros.",
        price: 499,
        currency: "₹",
        coverColor: "bg-blue-600"
    },
    {
        id: 2,
        title: "Technical Analysis Bible",
        description: "A complete comprehensive guide to chart patterns, indicators, and price action.",
        price: 799,
        currency: "₹",
        coverColor: "bg-emerald-600"
    },
    {
        id: 3,
        title: "Algo-Trading Blueprints",
        description: "Learn how to automate your strategies using Python and MQL5.",
        price: 1299,
        currency: "₹",
        coverColor: "bg-purple-600"
    }
];

export default function Books() {
    const { toast } = useToast();
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [showReceipt, setShowReceipt] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderId, setOrderId] = useState("");

    const handleBuyClick = (book: Book) => {
        setSelectedBook(book);
    };

    const handleConfirmPayment = () => {
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            setOrderId(`ORD-${Math.floor(Math.random() * 1000000)}`);
            setSelectedBook(null); // Close payment modal
            setShowReceipt(true); // Open receipt modal

            // Simulate Email Sending
            toast({
                title: "Receipt Sent",
                description: "A payment receipt has been sent to your registered email.",
                duration: 5000,
            });

        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-[#0A1628] text-white py-16">
                <div className="container mx-auto px-4">
                    <Link href="/education" className="inline-flex items-center text-slate-400 hover:text-white mb-6 text-sm font-medium transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Education
                    </Link>
                    <h1 className="text-4xl font-extrabold mb-4">Professional Trading Books</h1>
                    <p className="text-slate-400 text-lg max-w-2xl">Expand your knowledge with our curated collection of expert trading resources.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {BOOKS.map((book) => (
                        <div key={book.id} className="card-professional overflow-hidden flex flex-col h-full">
                            <div className={`h-48 ${book.coverColor} relative p-6 flex items-end`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <BookOpen className="text-white/20 w-32 h-32 absolute -right-6 -top-6 rotate-12" />
                                <div className="relative z-10">
                                    <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white font-bold inline-block mb-2">
                                        E-BOOK
                                    </div>
                                    <h3 className="text-white font-bold text-xl leading-tight">{book.title}</h3>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-slate-600 text-sm mb-6 flex-grow">{book.description}</p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="text-2xl font-bold text-slate-900">
                                        {book.currency}{book.price}
                                    </div>
                                    <Button
                                        onClick={() => handleBuyClick(book)}
                                        className="btn-primary"
                                    >
                                        Buy Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Important Note Section */}
                <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4 max-w-4xl mx-auto">
                    <div className="flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-amber-900 mb-2">Important Payment & Delivery Information</h4>
                        <p className="text-sm text-amber-800 leading-relaxed">
                            After payment, if you do not receive the PDF or if the PDF is deleted from your storage,
                            please share the payment receipt received on your email or a payment screenshot with our
                            official support email. Your book will be re-sent after verification.
                        </p>
                    </div>
                </div>
            </div>

            {/* Payment Confirmation Modal */}
            <Dialog open={!!selectedBook && !showReceipt} onOpenChange={(open) => !open && setSelectedBook(null)}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Confirm Purchase</DialogTitle>
                        <DialogDescription>
                            You are about to purchase <strong>{selectedBook?.title}</strong>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-6">
                        <div className="flex justify-between items-center text-sm mb-4">
                            <span className="text-slate-500">Item Price</span>
                            <span className="font-medium">{selectedBook?.currency}{selectedBook?.price}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm mb-4">
                            <span className="text-slate-500">Tax</span>
                            <span className="font-medium">{selectedBook?.currency}0</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold border-t pt-4">
                            <span>Total</span>
                            <span>{selectedBook?.currency}{selectedBook?.price}</span>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setSelectedBook(null)}>Cancel</Button>
                        <Button className="btn-primary" onClick={handleConfirmPayment} disabled={isProcessing}>
                            {isProcessing ? "Processing..." : "Pay Securely"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Receipt Modal */}
            <Dialog open={showReceipt} onOpenChange={setShowReceipt}>
                <DialogContent className="max-w-md text-center">
                    <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <DialogTitle className="text-center text-2xl mb-2">Payment Successful!</DialogTitle>
                    <DialogDescription className="text-center mb-6">
                        Your order has been processed correctly.
                    </DialogDescription>

                    <div className="bg-slate-50 rounded-xl p-6 text-left space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Order ID</span>
                            <span className="font-mono font-bold text-slate-900">{orderId}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Date</span>
                            <span className="font-medium text-slate-900">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Amount Paid</span>
                            <span className="font-bold text-emerald-600">Complete</span>
                        </div>
                    </div>

                    <Button className="w-full btn-primary" onClick={() => setShowReceipt(false)}>
                        Close & Download
                    </Button>
                    <div className="mt-4 text-xs text-slate-400">
                        A copy of this receipt has been emailed to you.
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
