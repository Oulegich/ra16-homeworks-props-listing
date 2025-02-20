import Item from './Item';

const Listing = ({ items }: IItems) => {
    return (
        <div className="item-list">
            {items.map(item => (
                <div className="item" key={item.listing_id}>
                    <Item item={item} />
                </div>
            ))}
        </div>
    )
}

export default Listing