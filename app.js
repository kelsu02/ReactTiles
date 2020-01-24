const Tile = (props) => {
    return (
      <div className={`tile ${props.tileClass}`}>
          {props.children}
      </div>  
    );
}

const Title = (props) => {
    return (
       <React.Fragment>
           <p className="title">{props.titleText}</p>
           <p className="subtitle">{props.subtitleText}</p>
       </React.Fragment>
    )
}

const Content = (props) => {
    return (
      <div className="content">
          <p>{props.cardContent}</p>
          {props.children}
      </div>  
    );
}

const Image = (props) => {
    return (
        <figure className="image is-4by3">
            <img src={props.imageSource}/>
        </figure>
    );
}

const ChildTitle = (props) => {
    return(
        <Tile tileClass="is-child box">
            <Title titleText={props.titleText} subtitleText={props.subtitleText} />
        </Tile>
    )
}

const ParentChildTile = (props) => {
    return(
        <Tile parentTileClass={`is-parent ${props.parentTileClass}`}>
            <Tile childTileClass={`is-child box ${props.childTileClass}`}>
                {props.children}
            </Tile>
        </Tile>
    )
}

ReactDOM.render(
    <React.Fragment>
        <Tile tileClass="is-ancestor">
            <ParentChildTile>
                <Title titleText="What's Up?" subtitleText="Words go here" />
            </ParentChildTile>
            <ParentChildTile>
                <Title titleText="Foo" subtitleText="Bar" />
            </ParentChildTile>
            <ParentChildTile>
                <Title titleText="Third Column" subtitleText="With some content">
                    <Content cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis." />
                </Title>
            </ParentChildTile>
        </Tile>

        <Tile tileClass="is-ancestor">
            <Tile tileClass="is-vertical is-8">
                <Tile>
                    <Tile tileClass="is-parent is-vertical">
                        <ChildTitle titleText="Vertical Tiles" subtitleText="Top box" />
                        <ChildTitle titleText="Vertical Tiles" subtitleText="Bottom box" />
                    </Tile>
                    <Tile tileClass="is-parent">
                        <Tile tileClass="is-child box">
                            <Title titleText="Middle Box" subtitleText="With an image" />
                            <Image imageSource="https://bulma.io/images/placeholders/640x480.png" />
                        </Tile>
                    </Tile>
                </Tile>
                <Tile tileClass="is-parent">
                    <Tile tileClass="is-child box">
                        <Title titleText="Wide column" subtitleText="Aligned with the right column" />
                        <Content cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis." />
                    </Tile>
                </Tile>
            </Tile>
            <Tile titleText="is-parent">
                <Tile tileClass="is-child box">
                    <Content>
                        <Title titleText="Tall column" subtitleText="with even more content" />
                        <Content cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam." />
                        <Content cardContent="Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor." />
                        <Content cardContent="Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo." />
                    </Content>
                </Tile>
            </Tile>
        </Tile>
        <Tile tileClass="is-ancestor">
            <Tile tileClass="is-parent">
                <Tile tileClass="is-child box">
                    <Title titleText="Side column" subtitleText="With some content" />
                    <Content cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis." />
                </Tile>
            </Tile>
            <Tile tileClass="is-parent is-8">
                <Tile tileClass="is-child box">
                    <Title titleText="Main column" subtitleText="With some content" />
                    <Content cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis." />
                </Tile>
            </Tile>
        </Tile>
    </React.Fragment>,
document.getElementById('root')
);

