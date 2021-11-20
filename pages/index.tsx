import React, { useState } from 'react';
import { Button, Htag, P, Tag, Rating } from '../components';


export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag={'h1'}>Заголовок</Htag>
      <Button appearance={'primary'} arrow={'right'} >Кнопка</Button>
      <Button appearance={'ghost'} arrow={'down'}>Кнопка</Button>
      <P>
        Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
      </P>
      <P size={'s'}>
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!
      </P>
      <Tag size={'m'} color={'grey'}>10</Tag>
      <Tag color={'green'}>-10 000 р</Tag>
      <Tag size={'m'} color={'red'}>hh.ru</Tag>
      <Tag size={'m'} color={'primary'}>primary</Tag>
      <Tag color={'ghost'}>Web design</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </div>
  );
}
