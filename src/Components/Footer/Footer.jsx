import CopyRight from '../CopyRight/CopyRight'
import Social from '../Social/Social'

export default function Footer() {
  return (
    <>

    <footer className='mt-auto py-24 bg-[#2C3E50] text-white text-center text-xl'>
        <div className="container mx-auto grid grid-cols-3 px-6">
            <div className=" flex-col-center" id='location'>
                <p>LOCATION</p>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div id="web" className=' flex-col-center'>
                <p>AROUND THE WEB</p>
                <Social/>
            </div>
            <div id="freelancer" className='flex-col-center'>
                <p>ABOUT FREELANCER</p>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </footer>
    
    <CopyRight/>

    </>
  )
}
