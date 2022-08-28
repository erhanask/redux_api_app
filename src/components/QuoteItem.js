import {Link} from "react-router-dom";

export const QuoteItem = ({item}) => {
    return <div style={{padding:'10px 5px'}}><Link to={`/quotes/${item.quote_id}`}>{item.quote}</Link> - <b>{item.author}</b></div>
}
