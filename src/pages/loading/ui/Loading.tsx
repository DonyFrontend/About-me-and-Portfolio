import { useC } from "@/shared/hooks/use-change-theme"

const Loading = () => {
    return (
        <div className={`w-full ${useC('bg-white', 'bg-[#030712]')} h-[100vh] fixed top-0 left-0 flex justify-center items-center`}>
            <div className={`w-[100px] h-[100px] border-[4px] border-y-transparent animate-spin rounded-full ${useC('border-black', 'border-white')}`}>
            </div>
        </div>
    )
}

export default Loading
