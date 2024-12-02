import male from './icons/male.png';
import female from './icons/female.png';
import './Article.css';

function Article(props)
{
    //if(props.db["people"][p].pol == "male") icon = male;
    //else icon = female;
    
    return( 
      <div className='app'>
          {
            // *********** тоже рабочий вариант ************
            // Object.keys(props.db["people"]).map(itemKey =>{
            //   const item = props.db["people"][itemKey];
            //   let icon = item.pol === "male" ? male : female;
            //   //console.log(item);
            //   return(
            //     <div className="card"key={itemKey}>
            //       <img src={item.photo} alt=""/>
            //       <div className="name">
            //           {item.name + ' ' + item.surname}
            //       </div>
            //       <div className="pol">
            //           <img src={icon} alt=""/>           
            //       </div>
            //       <div className="age">
            //           {item.age}
            //       </div>
            //     </div>
            //   )
            // })
            //***********************************************
            Object.keys(props.db["people"]).map(item =>
              {
                let icon = props.db["people"][item].pol === "male" ? male : female; // тернарный оператор
                console.log(item);
                return(
                  <div className="card" key={item}>
                    <img src={props.db["people"][item].photo} alt=""/>
                    <div className="name">
                        {props.db["people"][item].name + ' ' + props.db["people"][item].surname}
                    </div>
                    <div className="pol">
                        <img src={icon} alt=""/>           
                    </div>
                    <div className="age">
                        {props.db["people"][item].age}
                    </div>
                  </div>
                )
              }
            )
          }
      </div> 
    /*
    <article> 
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, repellat voluptatem labore quidem quasi minus impedit. Magnam esse, aut nostrum veniam eum adipisci minus nihil eos, ducimus ipsum, quod perferendis.
    </p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae expedita numquam saepe doloremque veritatis ducimus eveniet maiores tempora. Voluptatem in unde, vero vel sed quasi debitis laudantium nemo odio maxime.
    Assumenda omnis animi praesentium distinctio dolorum quisquam repudiandae. Hic, quaerat tenetur, libero modi iure cum inventore, sunt distinctio blanditiis labore dolores similique facere? Eveniet rem iure exercitationem delectus. Nisi, delectus.
    Optio eius officia animi quis, in maxime beatae ducimus at numquam rerum quos cupiditate officiis labore sequi? Dolor, sint, facilis qui non dolorem itaque, aliquam nisi assumenda sapiente vero ex!          
    </p> 
    </article>
    */
   
  
    );
}

export default Article;