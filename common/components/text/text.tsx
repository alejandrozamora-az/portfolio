import style from './text.module.css';

export default function Text({
  text,
  type = "body",
  className: classText,
}: {
  text: string;
  type?: "headline" | "title" | "bodyLarge" | "body" | "bodySmall";
  className?: string;
}) {
  const textType = (() => {
    switch (type) {
      case "headline":
        return style.headline;
      case "title":
        return style.title;
      case "bodyLarge":
        return style.bodyLarge;
      case "body":
        return style.body;
      case "bodySmall":
        return style.bodySmall;
    }
  })();

  const classes = `${textType} ${classText} ${style.textCenter}`;

  switch (type) {
    case "headline":
      return <h1 className={classes}>{text}</h1>;
    case "title":
      return <h2 className={classes}>{text}</h2>;
    case "bodyLarge":
      return <h3 className={classes}>{text}</h3>;
    case "body":
      return <p className={classes}>{text}</p>;
    case "bodySmall":
      return <small className={classes}>{text}</small>;
  }
}
