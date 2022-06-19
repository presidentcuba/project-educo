import React from "react";
import CardLesson from "../CardLesson";
import lesson from "src/assets/lesson.svg";
import Resources from "./Resources";
export default function Lessons() {
  const dataLesson = [
    {
      image: lesson,
      name: "Nulla sit mauris nunc of suscipit",
      lesson: "Lesson 2",
      content:
        "Eu lacus ornare sollicitudin dolor mauris fbib fen dum tritique massa euiod suspe mauris nunc ac felis orcieu soft lectus nibh vulputate urna ut sed neque",
    },
    {
      image: lesson,
      name: "Nulla sit mauris nunc of suscipit",
      lesson: "Lesson 2",
      content:
        "Eu lacus ornare sollicitudin dolor mauris fbib fen dum tritique massa euiod suspe mauris nunc ac felis orcieu soft lectus nibh vulputate urna ut sed neque",
    },
    {
      image: lesson,
      name: "Nulla sit mauris nunc of suscipit",
      lesson: "Lesson 2",
      content:
        "Eu lacus ornare sollicitudin dolor mauris fbib fen dum tritique massa euiod suspe mauris nunc ac felis orcieu soft lectus nibh vulputate urna ut sed neque",
    },
    {
      image: lesson,
      name: "Nulla sit mauris nunc of suscipit",
      lesson: "Lesson 2",
      content:
        "Eu lacus ornare sollicitudin dolor mauris fbib fen dum tritique massa euiod suspe mauris nunc ac felis orcieu soft lectus nibh vulputate urna ut sed neque",
    },
    {
      image: lesson,
      name: "Nulla sit mauris nunc of suscipit",
      lesson: "Lesson 2",
      content:
        "Eu lacus ornare sollicitudin dolor mauris fbib fen dum tritique massa euiod suspe mauris nunc ac felis orcieu soft lectus nibh vulputate urna ut sed neque",
    },
  ];
  return (
    <div>
      {dataLesson.map((item, index) => (
        <CardLesson data={item} key={index} />
      ))}
      <Resources />
    </div>
  );
}
