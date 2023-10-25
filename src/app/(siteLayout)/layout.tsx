import Navbar from "@/components/navbar/navbar";
import { Footer } from "@/components/ui/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SiteLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />
      <ToastContainer />
      {children}
      <Footer />
    </section>
  )
}