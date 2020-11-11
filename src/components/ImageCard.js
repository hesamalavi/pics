import React from 'react';

export default class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        // divide by 10 because grid auto-rows: 10px;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
        // this.setState({ spans: spans}) the above is a shorthand es6 because the key and value name are the same
    };
    render() {
        const { description, urls, links } = this.props.image;

        return (
            <>
                <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                    <a
                        href={links.download}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            ref={this.imageRef}
                            alt={description}
                            src={urls.regular}
                        />
                    </a>
                </div>
            </>
        );
    }
}
