// تأثيرات شريط التنقل عند التمرير
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  
  // إظهار/إخفاء زر العودة للأعلى
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

// زر القائمة للهواتف
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((item) => {
  item.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
  });
});

// زر العودة للأعلى
const scrollBtn = document.querySelector(".scrollToTop-btn");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

// تأثيرات الظهور عند التمرير
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  
  for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 50;
      
      if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
      }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// تبديل اللغة
const languageBtn = document.querySelector(".language-btn");
const elementsToTranslate = document.querySelectorAll("[data-lang]");

const translations = {
  'ar': {
      'home': 'الرئيسية',
      'about': 'عني',
      'skills': 'المهارات',
      'services': 'الخدمات',
      'work': 'أعمالي',
      'contact': 'اتصل بي',
      'main-title': 'مرحباً، أنا',
      'web-designer': 'مصمم ويب محترف',
      'web-developer': 'ومطور تطبيقات',
      'graphic-designer': 'ومصمم جرافيك',
      'it-specialist': 'خريج تقنية معلومات',
      'see-work': 'تصفح أعمالي',
      'about-title': 'معلومات عني',
      'about-me': 'ذي يزن النهاري',
      'about-text': 'خريج تقنية معلومات (IT) متخصص في تطوير الويب وتصميم الواجهات. أمتلك خبرة في إنشاء مواقع ويب تفاعلية وتطبيقات ويب متكاملة. أعمل كمصمم ومطور ويب مستقل مع شغف كبير للإبداع التقني.',
      'experience': 'الخبرة:',
      'projects': 'المشاريع:',
      'education': 'التعليم:',
      'it-degree': 'بكالوريوس تقنية معلومات',
      'freelance': 'العمل الحر:',
      'available': 'متاح',
      'contact-me': 'تواصل معي',
      'skills-title': 'المهارات التقنية',
      'skills-text': 'خبراتي ومهاراتي',
      'skills-description': 'أمتلك مجموعة واسعة من المهارات التقنية التي تمكنني من تقديم حلول متكاملة. من تصميم الواجهات إلى تطوير الويب الخلفي، أسعى دائماً لاستخدام أحدث التقنيات وأفضل الممارسات.',
      'soft-skills': 'المهارات الشخصية:',
      'creativity': 'إبداع وتصميم مبتكر',
      'problem-solving': 'حل المشكلات التقنية',
      'teamwork': 'العمل ضمن فريق',
      'communication': 'تواصل فعال',
      'services-title': 'الخدمات المقدمة',
      'services-subtitle': 'حلول تقنية متكاملة تلبي احتياجات عملك',
      'web-design': 'تصميم مواقع الويب',
      'web-design-text': 'تصميم عصري وجذاب يتوافق مع معايير UI/UX لضمان تجربة مستخدم ممتازة.',
      'responsive-design': 'تصميم متجاوب',
      'responsive-design-text': 'مواقع تعمل بكفاءة على جميع الأجهزة من أجهزة الكمبيوتر إلى الهواتف الذكية.',
      'web-development': 'تطوير الويب',
      'web-development-text': 'بناء تطبيقات ويب ديناميكية باستخدام أحدث التقنيات وأطر العمل.',
      'graphic-design': 'تصميم جرافيك',
      'graphic-design-text': 'تصميم شعارات ومواد تسويقية بصرية تعزز هوية علامتك التجارية.',
      'backend-dev': 'تطوير الخلفية',
      'backend-dev-text': 'حلول خلفية قوية وآمنة باستخدام C# و Python و PHP.',
      'seo': 'تحسين محركات البحث',
      'seo-text': 'تحسين موقعك لتحقيق تصنيفات أعلى في نتائج محركات البحث.',
      'work-title': 'معرض أعمالي',
      'work-subtitle': 'بعض المشاريع التي قمت بتنفيذها',
      'project1-title': 'موقع تجاري إلكتروني',
      'project1-desc': 'تصميم وتطوير متجر إلكتروني متكامل',
      'project2-title': 'تطبيق إدارة المهام',
      'project2-desc': 'تطبيق ويب لإدارة المهام الشخصية',
      'project3-title': 'هوية بصرية',
      'project3-desc': 'تصميم هوية بصرية لشركة ناشئة',
      'project4-title': 'واجهة تطبيق جوال',
      'project4-desc': 'تصميم واجهة مستخدم لتطبيق جوال',
      'project5-title': 'نظام إدارة محتوى',
      'project5-desc': 'تطوير نظام إدارة محتوى مخصص',
      'project6-title': 'موقع شخصي',
      'project6-desc': 'تصميم وتطوير موقع شخصي',
      'view-project': 'عرض المشروع',
      'see-more-projects': 'عرض المزيد من الأعمال',
      'contact-title': 'تواصل معي',
      'contact-subtitle': 'هل لديك مشروع أو استفسار؟ لا تتردد في التواصل',
      'address': 'العنوان',
      'phone': 'الهاتف',
      'email': 'البريد الإلكتروني',
      'working-hours': 'ساعات العمل',
      'hours': 'الأحد - الخميس: 9ص - 5م',
      'send-message': 'أرسل لي رسالة',
      'name': 'الاسم الكامل',
      'subject': 'الموضوع',
      'message': 'الرسالة',
      'send': 'إرسال الرسالة',
      'footer-text': 'مصمم ومطور ويب محترف',
      'all-rights': 'كل الحقوق محفوظة'
  },
  'en': {
      'home': 'Home',
      'about': 'About',
      'skills': 'Skills',
      'services': 'Services',
      'work': 'Work',
      'contact': 'Contact',
      'main-title': 'Hello, I am',
      'web-designer': 'Professional Web Designer',
      'web-developer': 'and App Developer',
      'graphic-designer': 'and Graphic Designer',
      'it-specialist': 'IT Graduate',
      'see-work': 'View My Work',
      'about-title': 'About Me',
      'about-me': 'Thi Yazan Al-Nahari',
      'about-text': 'Information Technology (IT) graduate specializing in web development and interface design. I have experience in creating interactive websites and complete web applications. I work as a freelance web designer and developer with a great passion for technical creativity.',
      'experience': 'Experience:',
      'projects': 'Projects:',
      'education': 'Education:',
      'it-degree': 'Bachelor of IT',
      'freelance': 'Freelance:',
      'available': 'Available',
      'contact-me': 'Contact Me',
      'skills-title': 'Technical Skills',
      'skills-text': 'My Skills and Expertise',
      'skills-description': 'I have a wide range of technical skills that enable me to provide integrated solutions. From interface design to backend web development, I always strive to use the latest technologies and best practices.',
      'soft-skills': 'Soft Skills:',
      'creativity': 'Creativity and Innovative Design',
      'problem-solving': 'Technical Problem Solving',
      'teamwork': 'Teamwork',
      'communication': 'Effective Communication',
      'services-title': 'My Services',
      'services-subtitle': 'Integrated technical solutions for your business needs',
      'web-design': 'Web Design',
      'web-design-text': 'Modern and attractive designs that comply with UI/UX standards to ensure an excellent user experience.',
      'responsive-design': 'Responsive Design',
      'responsive-design-text': 'Websites that work efficiently on all devices from computers to smartphones.',
      'web-development': 'Web Development',
      'web-development-text': 'Building dynamic web applications using the latest technologies and frameworks.',
      'graphic-design': 'Graphic Design',
      'graphic-design-text': 'Designing logos and visual marketing materials that enhance your brand identity.',
      'backend-dev': 'Backend Development',
      'backend-dev-text': 'Powerful and secure backend solutions using C#, Python and PHP.',
      'seo': 'SEO',
      'seo-text': 'Optimizing your website to achieve higher rankings in search engine results.',
      'work-title': 'My Portfolio',
      'work-subtitle': 'Some of my completed projects',
      'project1-title': 'E-Commerce Website',
      'project1-desc': 'Design and development of a complete online store',
      'project2-title': 'Task Management App',
      'project2-desc': 'Web application for personal task management',
      'project3-title': 'Brand Identity',
      'project3-desc': 'Visual identity design for a startup',
      'project4-title': 'Mobile App UI',
      'project4-desc': 'User interface design for a mobile app',
      'project5-title': 'Content Management System',
      'project5-desc': 'Custom CMS development',
      'project6-title': 'Personal Website',
      'project6-desc': 'Design and development of a personal website',
      'view-project': 'View Project',
      'see-more-projects': 'View More Works',
      'contact-title': 'Contact Me',
      'contact-subtitle': 'Have a project or inquiry? Feel free to contact me',
      'address': 'Address',
      'phone': 'Phone',
      'email': 'Email',
      'working-hours': 'Working Hours',
      'hours': 'Sun - Thu: 9am - 5pm',
      'send-message': 'Send Me a Message',
      'name': 'Full Name',
      'subject': 'Subject',
      'message': 'Message',
      'send': 'Send Message',
      'footer-text': 'Professional Web Designer & Developer',
      'all-rights': 'All Rights Reserved'
  }
};

let currentLang = 'ar';

languageBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  translatePage(currentLang);
});

function translatePage(lang) {
  elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-lang');
      if (translations[lang][key]) {
          element.textContent = translations[lang][key];
          
          // تحديث العناصر الأخرى مثل النصوص البديلة
          if (element.hasAttribute('placeholder')) {
              element.setAttribute('placeholder', translations[lang][key]);
          }
          
          if (element.hasAttribute('value') && element.getAttribute('type') !== 'hidden') {
              element.setAttribute('value', translations[lang][key]);
          }
      }
  });
}

// تغيير السمات
const themeBtn = document.querySelector('.theme-btn');
const body = document.body;

const themes = ['default', 'dark-theme', 'blue-theme'];
let currentTheme = 0;

themeBtn.addEventListener('click', () => {
  body.classList.remove(...themes);
  currentTheme = (currentTheme + 1) % themes.length;
  body.classList.add(themes[currentTheme]);
  
  // حفظ السمة المختارة في التخزين المحلي
  localStorage.setItem('theme', themes[currentTheme]);
});

// تحميل السمة المحفوظة
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  currentTheme = themes.indexOf(savedTheme);
}

// نموذج الاتصال
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      
      fetch(this.action, {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
      })
      .then(response => {
          if (response.ok) {
              formMessage.textContent = currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.' : 'Your message has been sent successfully! I will contact you soon.';
              formMessage.classList.add('success');
              formMessage.style.display = 'block';
              contactForm.reset();
              
              setTimeout(() => {
                  formMessage.style.display = 'none';
              }, 5000);
          } else {
              throw new Error('Network response was not ok');
          }
      })
      .catch(error => {
          formMessage.textContent = currentLang === 'ar' ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.' : 'An error occurred while sending the message. Please try again later.';
          formMessage.classList.add('error');
          formMessage.style.display = 'block';
          
          setTimeout(() => {
              formMessage.style.display = 'none';
          }, 5000);
      });
  });
}

// تحديث سنة حقوق النشر
document.getElementById('year').textContent = new Date().getFullYear();

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
  // ترجمة الصفحة للغة الحالية
  translatePage(currentLang);
  
  // تعيين اتجاه الصفحة
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  
  // إضافة تأثيرات للعناصر عند التحميل
  setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el, index) => {
          el.style.transitionDelay = `${index * 0.1}s`;
      });
  }, 500);
});