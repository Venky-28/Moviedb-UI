import FontAwesomeIcon from "react-fontawesome";

const  NavBarList = ({items}) => {

    const getItem= (item) => {
        let itemList = null;
        switch(item.type){
            case 'logo':
                itemList = <img src={item.src} className="h-5 min-w-[154px]" alt={item.name} />
                break;
            case 'language':
                itemList = <p className="border-white rounded-[3px] py-[3px] px-[5px] border-[1px] border-solid hover:bg-white hover:text-tmbdarkBlue">{item.name}</p>   
                break; 
            case 'icon':
                itemList = <FontAwesomeIcon name={item.name} size='lg' />
                break;
            default:
                itemList = <p>{item.name}</p>
                break;    
        }
        return itemList
    }


    return <ul className="flex gap-7 items-center">
        {items.map(item=>{
           return <li>{getItem(item)}</li>
        })}
    </ul>

}


export default NavBarList;