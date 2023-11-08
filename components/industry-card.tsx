export default function IndustryCard(props: any) {
    return (
        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="h-16" src={props.image} alt={props.alt} />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 mt-4">{ props.title }</h4>
        </div>
    )
}
