import { FirsBlock} from "./ui/firsBlock"
import { MainBlock } from "./ui/mainBlock"

export default function Home() { 
  return (
    <>
      <div className="w-full h-full mx-2 p-5 rounded-md bg-base overflow-y-scroll">
        <FirsBlock/>
        <MainBlock/>
        <MainBlock/>
        <MainBlock/>
        <MainBlock/>
        <MainBlock/>
      </div>
    </>
  )
}