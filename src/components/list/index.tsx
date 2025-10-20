type listProps<T> = {
    items: T[]
    renderItem: (item: T) => React.ReactNode
}

export function List<T>({items, renderItem} : listProps<T>){
   
   return(
        <ul>
            {items.map((item)=>(
                <li>{renderItem(item)}</li>
            ))}
        </ul>
    )
}