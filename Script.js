var test1 = document.getElementById('text1');   
const paragraph = [
  'خدمة إنشاء المواقع الإلكترونية هي خدمة مميزة تقدمها فريق العالم الجديد ، تعتبر الخدمة الأمثل لجميع أصحاب المشاريع الصغيرة والكبيرة بالمملكة الأردنية الهاشمية. تتميز الخدمة بسرعة التنفيذ والأسعار التنافسية، حيث يسعى الفريق دائماً لتلبية احتياجات عملائها وتقديم حلول ابتكارية لمساعدتهم على نجاح مشاريعهم والتواصل مع العملاء حول العالم. من خلال هذه الخدمة، يتم تصميم وبرمجة المواقع الإلكترونية الاحترافية والمميزة التي تساعد في بناء هوية تجارية فعالة على الإنترنت وتحقيق الأهداف المرجوة.',
  'إن كنت ترغب في إنشاء متجر إلكتروني احترافي على الإنترنت، فإن خدمة انشاء متجر الكتروني بواسطة تقنية ووردبريس ستكون الخيار الأمثل لك. فهي خدمة تمكنك من إنشاء متجر إلكتروني يتناسب تمامًا مع احتياجاتك ورغباتك، تستطيع تخصيص المتجر الخاص بك باستخدام أدوات مجانية سهلة الاستخدام، وذلك دون الحاجة إلى خبرة تقنية مسبقة. كما يمكنك من خلال ووردبريس الاستفادة من خيارات جمع المدفوعات على موقعك الإلكتروني بسهولة ويسر من خلال خدمات الشراء والبيع المتاحة في هذه الخدمة،',
  'أقدّم خدمة تعديل وتخصيص لمواقع الإنترنت ومنصّة سلة للتجارة الإلكترونية. حيث يمكنني تعديل قوالب CSS لموقعك الإلكتروني على منصة سلة أو زد، وذلك بمرونة وأفضل جودة عبر التواصل المباشر معي. تعديلاتي بناءة على الشكل الذي يرضيك، بما يتماشى مع نوعية منتجاتك واحتياجاتك التجارية. كما أتيت بمراجعة مفصلة لمنصة سلة للتجارة الإلكترونية، حيث عرّفت على مميزات المنصة وكشفت عن العيوب المحتملة فيها، وذلك لإفادتك والمساعدة في اتخاذ القرار حول مدى ملاءمتها لمشروعك التجاري.'
]
const title = [
  'تطوير موقع الإلكتروني',
  'إنشاء متجر إلكتروني',
  'تعديل وتخصيص مواقع الإنترنت'
]
const img = [
  'إنشاء-موقع-ووردبريس.png',
  'تكلفة-متجر.png',
  'slae.jpg '
]
// دالة اظاهر تأثير بلور عند سكلرو
 function scrollAppear(){  
  gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});
}
 function Chang_text(length,id){
  var parentElement = length.parentNode;
  var index = Array.prototype.indexOf.call(parentElement.children, length);
  console.log(index); // سيتم طباعة الفهرس (الموقع) للعنصر الفرعي داخل العنصر الأب
   let titleHtml = document.getElementById('title'); 
   let text = document.getElementById('text');
   let img_slider = document.getElementById('img_slider');
   text.innerHTML = paragraph[index];
   titleHtml.innerHTML = title[index];
   img_slider.src = `/img/slider/${img[index]}`;
  

 } 

 function getElementIndex(element) {
  var parentElement = element.parentNode;
  var index = Array.prototype.indexOf.call(parentElement.children, element);
  console.log(index); // سيتم طباعة الفهرس (الموقع) للعنصر الفرعي داخل العنصر الأب

}


  //  for(var i = 1; i < 4 ; i++){
  //   var checkBox = document.getElementById(`check${i}`);
  //   if (radio.checked) {
  //     radio.checked = false;
  //   } else {
  //     radio.checked = true;
  //   }
  //  }



scrollAppear();