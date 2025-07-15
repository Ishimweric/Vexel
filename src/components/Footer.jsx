function Footer(){
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="h-16 border-t shadow-sm bg-slate-100 grid place-content-center">
      <p className="">&copy; {year} Vexel. All rights reserved.</p>
    </footer>
  )
}

export default Footer