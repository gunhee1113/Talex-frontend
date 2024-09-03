import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Talex
            </Link>
            <p className="text-sm text-gray-600 mt-2">
              Discover and share amazing talents
            </p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary">
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Talex. All rights reserved.
        </div>
      </div>
    </footer>
  )
}