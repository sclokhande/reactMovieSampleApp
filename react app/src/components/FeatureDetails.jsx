import React, { useEffect, useState } from 'react';

function FeatureDetails({ match }) {
    const [item, setItem] = useState({})
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        featchItem();
    }, []);

    const featchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const dataFinal = await data.json();
        setItem(dataFinal.data)
        setIsLoaded(true);
    };

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            console.log(item.item),
            <div className="row">
                <div className="col-4">
                    <img className="card-img-top" src={item.item.images.icon} />
                </div>
                <div className="col-sm-7">
                    <div className="card-body p-5">
                        <h3 className="title mb-3">{item.item.name}</h3>

                        <p className="price-detail-wrap">
                            <span className="price h3 text-warning">
                                <span className="currency">US $</span><span className="num">{item.item.cost}</span>
                            </span>

                        </p>
                        <dl className="item-property">
                            <dt>Description</dt>
                            <dd><p>{item.item.description} </p></dd>
                        </dl>
                        <dl className="param param-feature">
                            <dt>Rarity</dt>
                            <dd>{item.item.rarity}</dd>
                        </dl>
                        <dl className="param param-feature">
                            <dt>Total Points</dt>
                            <dd>{item.item.ratings.totalPoints}</dd>
                        </dl>
                        <dl className="param param-feature">
                            <dt>Number Votes</dt>
                            <dd>{item.item.ratings.numberVotes}</dd>
                        </dl>
                        <hr />
                        <div className="row">
                            {
                                item.itemOccurrences.entries.map(entrie => (
                                    <div className="col-3">
                                        {entrie.date}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FeatureDetails