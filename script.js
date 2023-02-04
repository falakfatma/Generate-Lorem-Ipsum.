let amount = document.getElementById('amount')
let result = document.getElementById('result')

let texts = [
  ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis deserunt, ullam voluptas ducimus ea tenetur sit accusantium, quasi consectetur corrupti fuga inventore ipsum odit assumenda asperiores numquam similique enim?`,

  ` Maxime facere, cum quidem excepturi dolorum reprehenderit odio rem quia voluptate ducimus ad! Ab, nesciunt. Ipsam quia officiis dolores ea dolor eius magnam aspernatur, at sint fugiat quidem temporibus sapiente? Reiciendis exercitationem rerum adipisci nulla perferendis. Eligendi nostrum ipsam sed! Reiciendis alias aliquid dolore voluptate sit delectus saepe libero labore. Nobis maxime eos ab delectus. Iste reiciendis velit commodi cumque quibusdam voluptates?`,

  ` Pariatur iusto libero rem aperiam maiores. Expedita odit itaque animi eveniet id at sint numquam, exercitationem fugiat! Esse impedit est deleniti, rem sit beatae. Unde quod beatae maxime atque architecto tempore ea provident doloribus, repellat voluptatibus impedit harum!`,

  `Architecto mollitia veniam maxime exercitationem blanditiis debitis aut dolor! Consectetur cumque eligendi, quo quae culpa voluptates autem accusantium rerum est facilis modi!`,
  ` Magni quidem mollitia sapiente optio saepe assumenda non impedit, officia porro rerum aliquid possimus dolores, cupiditate fuga illo excepturi voluptate, dolorum quasi reiciendis odit odio eligendi ducimus sed modi? Quam recusandae vel itaque dolores, perspiciatis tempora id sit! `,

  ` Qui blanditiis numquam perferendis nostrum quos odit nisi odio ullam, cupiditate dignissimos minima repellendus quod. Quod voluptatum rerum, odit quam in id ab quibusdam culpa ex et placeat quo, fugit at possimus.`,

  ` Quisquam, iste optio corrupti culpa suscipit repellat pariatur ullam sint! Quam iure vitae totam temporibus magnam atque quidem, delectus earum voluptate commodi voluptatum, eos adipisci quos repudiandae quae mollitia corporis veniam voluptates est numquam autem!`,

  `Voluptatibus, ex voluptas nihil minus architecto aut possimus sapiente excepturi iure voluptatem iste dignissimos tempore repellendus sunt est officiis quae perferendis numquam eveniet consectetur ut atque assumenda. Recusandae voluptas ducimus maiores vel rem vitae tenetur reprehenderit asperiores, corporis eius nesciunt.`,

  `Deleniti accusamus facilis adipisci esse ab nisi exercitationem veniam, qui voluptas quisquam, nesciunt ea quod aliquam, quasi itaque laboriosam eaque beatae. Sapiente est voluptatum, accusamus minus suscipit quas quidem, magnam exercitationem minima labore, quis debitis temporibus autem error asperiores tenetur voluptatibus culpa. Adipisci maxime sequi dolorem ratione voluptatibus excepturi fuga ea consequuntur rem!`
]
console.log(texts.length)

amount.addEventListener('input', (e) => {
  e.preventDefault()
  let random = Math.floor(Math.random() * texts.length)
let value = parseInt(amount.value)
  if(isNaN(value) || value <= 0 || value > texts.length) {
    result.innerHTML = texts[random]
  }
  else {
    result.innerHTML = texts.slice(0, value).map((ele)=>{
    return  `<p>${ele}</p>`
  }).join("")
    
  }
})

