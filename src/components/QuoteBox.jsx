import quotes from './quotes.json';

const QuoteBox = ({colors, colorRandom, index}) => {
    return (    
        <div className="QuoteBox" style={{ color: colors[colorRandom] }}>
                <h1><i className="fa-sharp fa-solid fa-quote-left"></i></h1>
                <h2 className="text">{quotes[index].quote}</h2>
                <p className="author">{quotes[index].author}</p>
        </div>
    );
};

export default QuoteBox;