import './globals.css'
import Link from 'next/link';

export const metadata = {
  title: 'MindWork',
  description: 'Get job',
}

function Navbar() {

  const links = [
    { name: 'MindWork', href: '/' },
    { name: '고용주', href: '/employer' },
    { name: '노동자', href: '/employee' },
    { name: '소개', href: '/about' }
  ]

  return (<ul className="flex flex-row p-4">{links.map((link, index) => <li className="basis-1/4 text-3xl text-center"
    key={index}><Link href={link.href}>{link.name}</Link></li>)}</ul>)
}

function Footer() {
  return (
    <div className="bg-slate-300">페이지에 문제가 있나요?
      메일로 피드백을 주시면 빠르게 수정하겠습니다.<br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="mailto:kwangson@yahoo.com">메일 보내기. Click!</a>
      </button>
    </div>)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="kr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html >
  )
}
