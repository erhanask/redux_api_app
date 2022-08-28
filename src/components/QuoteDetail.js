import {Redirect, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export const QuoteDetail = () => {
    const { quote_id } = useParams();

    const quote = useSelector(state => state.quotes.items.find(item => item.quote_id === Number(quote_id)));

    //todo: if quote does not exist route should redirect.
    // if (!quote) {
    //     return <Redirect to={'/quotes'}/>
    // }

    return (
        <div>
            {JSON.stringify(quote)}
        </div>
    )
}
