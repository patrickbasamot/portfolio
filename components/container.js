


export default function Container({ children }){
  return(
    <div className='snap-mandatory snap-y overflow-scroll w-screen h-screen container-lg bg-#0f0e17'>
      <main> 
      {children}
      </main>
    </div>
  )
}
