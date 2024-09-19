interface FooterListProps{
    children: React.ReactNode;
}

export const FooterList: React.FC<FooterListProps> = ({children}) => {
  return (
    <div className="
    w-full
    md: w-1/2
    flex
    flex-col
    gap-[20px] md:gap-[40px]
    ">
        {children}
    </div>
  )
}
