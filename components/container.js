


export default function Container({ children }){
  return(
    // Temporary disabled Snap 'snap-mandatory snap-y overflow-scroll'
    <div className=' w-screen h-screen container-lg bg-#0f0e17'>
      <main> 
      {children}
      </main>
    </div>
  )
}
