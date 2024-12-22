import { IContentRead } from "../../vite-env";
import { JournalistSection } from "../JournalistSection/JournalistSection";
import { ImagePublication, PublicationBody, PublicationContent, PublicationHead } from "./ContentReaderStyled";

export function ContentRead({ publication, journalist, type }: IContentRead) {

    return (
        <PublicationBody>
            <PublicationHead>
                {type === "column" && (<p className="columnCategory">Coluna {publication.category}</p>)}
                {type === "news" && (<p className="newsCategory">#{publication.category}</p>)}
                <h1>{publication.title}</h1>
                <p className="subtitle">{publication.subtitle}</p>
                
                <JournalistSection
                    profilePicture={journalist.profilePicture}
                    journalistName={journalist.name}
                    journalistId={journalist._id}
                    publishedAt={publication.publishedAt}
                    edited={publication.edited}
                />
            </PublicationHead>

            <ImagePublication>
                <figure>
                    <img src={publication.banner} alt={publication.bannerAlt} />
                    <figcaption>{publication.bannerFigcaption}</figcaption>
                </figure>
            </ImagePublication>

            <PublicationContent>
                <div dangerouslySetInnerHTML={{ __html: publication.content }} />
            </PublicationContent>
        </PublicationBody>
    )
}