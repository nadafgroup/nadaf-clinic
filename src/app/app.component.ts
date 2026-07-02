import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen = false;
  isScrolled = false;
  currentYear = new Date().getFullYear();
  isMobile = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: string) {
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  navItems = [
    { name: 'मुख्यपृष्ठ', link: '#home' },
    { name: 'सेवा', link: '#services' },
    { name: 'आमच्याबद्दल', link: '#about' },
    { name: 'रुग्णांचे मत', link: '#testimonials' },
    { name: 'संपर्क', link: '#contact' }
  ];

  services = [
    { name: 'पाठदुखी व मानदुखी', icon: 'fas fa-spine', desc: 'तज्ज्ञ फिजिओथेरपीद्वारे पाठ आणि मानेच्या वेदनांवर प्रभावी उपचार.', color: '#FF6B6B', gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)' },
    { name: 'सांधेदुखी उपचार', icon: 'fas fa-joint', desc: 'सांधेदुखीवर आधुनिक उपचार पद्धती आणि व्यायाम थेरपी.', color: '#4ECDC4', gradient: 'linear-gradient(135deg, #4ECDC4, #6EDDD6)' },
    { name: 'ऑर्थोपेडिक थेरपी', icon: 'fas fa-bone', desc: 'हाडे, स्नायू आणि सांधे यांच्या समस्यांवर वैज्ञानिक उपचार.', color: '#45B7D1', gradient: 'linear-gradient(135deg, #45B7D1, #6EC8E0)' },
    { name: 'न्यूरोलॉजिकल थेरपी', icon: 'fas fa-brain', desc: 'मज्जासंस्थेशी संबंधित विकारांवर विशेष उपचार योजना.', color: '#96CEB4', gradient: 'linear-gradient(135deg, #96CEB4, #B8DFC9)' },
    { name: 'स्पोर्ट्स पुनर्वसन', icon: 'fas fa-running', desc: 'खेळातील दुखापतींचे पुनर्वसन आणि कार्यक्षमता पुनर्प्राप्ती.', color: '#DDA0DD', gradient: 'linear-gradient(135deg, #DDA0DD, #E8C0E8)' },
    { name: 'शस्त्रक्रियेनंतर पुनर्वसन', icon: 'fas fa-procedures', desc: 'शस्त्रक्रियेनंतर जलद पुनर्प्राप्तीसाठी वैयक्तिक कार्यक्रम.', color: '#F7DC6F', gradient: 'linear-gradient(135deg, #F7DC6F, #FAE894)' },
    { name: 'फ्रोजन शोल्डर', icon: 'fas fa-snowflake', desc: 'खांद्याच्या अकडलेल्या स्थितीवर प्रभावी आणि सौम्य उपचार.', color: '#85C1E9', gradient: 'linear-gradient(135deg, #85C1E9, #A8D4F0)' },
    { name: 'सायटिका व स्नायू वेदना', icon: 'fas fa-bolt', desc: 'सायटिका आणि स्नायूंच्या वेदनांवर आधुनिक उपचार पद्धती.', color: '#F1948A', gradient: 'linear-gradient(135deg, #F1948A, #F5B7B1)' },
    { name: 'इलेक्ट्रोथेरपी', icon: 'fas fa-bolt', desc: 'विद्युत उपचार पद्धतींद्वारे वेदना कमी करणे आणि स्नायू उत्तेजन.', color: '#A569BD', gradient: 'linear-gradient(135deg, #A569BD, #C39BD3)' },
    { name: 'व्यायाम उपचार', icon: 'fas fa-dumbbell', desc: 'वैयक्तिक व्यायाम योजनांद्वारे स्नायू बळकटीकरण.', color: '#5DADE2', gradient: 'linear-gradient(135deg, #5DADE2, #85C8EA)' },
    { name: 'मॅन्युअल थेरपी', icon: 'fas fa-hand-holding-heart', desc: 'हाताने केल्या जाणाऱ्या उपचार पद्धतींद्वारे सांधे आणि स्नायूंची हालचाल सुधारणा.', color: '#58D68D', gradient: 'linear-gradient(135deg, #58D68D, #82E0AA)' },
    { name: 'ज्येष्ठ नागरिक थेरपी', icon: 'fas fa-user-plus', desc: 'वृद्धांसाठी विशेष फिजिओथेरपी सेवा - गतिशीलता वाढवण्यासाठी.', color: '#F8C471', gradient: 'linear-gradient(135deg, #F8C471, #FAD7A1)' },
    { name: 'घरपोच फिजिओथेरपी', icon: 'fas fa-home', desc: 'आपल्या घरीच तज्ज्ञ फिजिओथेरपी सेवा - सोयीस्कर आणि आरामदायी.', color: '#85C1E9', gradient: 'linear-gradient(135deg, #85C1E9, #A8D4F0)' }
  ];

  reasons = [
    { icon: 'fas fa-user-md', text: 'अनुभवी व कुशल फिजिओथेरपिस्ट' },
    { icon: 'fas fa-user-edit', text: 'वैयक्तिक उपचार योजना' },
    { icon: 'fas fa-microscope', text: 'आधुनिक उपकरणे व पद्धती' },
    { icon: 'fas fa-shield-alt', text: 'स्वच्छ व सुरक्षित वातावरण' },
    { icon: 'fas fa-rupee-sign', text: 'वाजवी शुल्क' },
    { icon: 'fas fa-hand-holding-heart', text: 'रुग्णकेंद्रित सेवा' }
  ];

  testimonials = [
    { name: 'रमेश पाटील', text: 'पाठदुखीच्या त्रासातून मुक्ती मिळाली. नदाफ क्लिनिकच्या उपचारांनी माझे जीवन सुधारले.', rating: 5, location: 'कोल्हापूर' },
    { name: 'स्नेहा जोशी', text: 'गुडघेदुखीवर खूप प्रभावी उपचार. खूप आभारी आहे.', rating: 5, location: 'शिरोळ' },
    { name: 'अनिल देशमुख', text: 'व्यावसायिक आणि आदरयुक्त वातावरण. उपचारांचे परिणाम उत्कृष्ट.', rating: 5, location: 'नांदणी' },
    { name: 'मीना कुलकर्णी', text: 'माझ्या आईला झालेल्या अपघातानंतर उत्तम पुनर्वसन.', rating: 5, location: 'कोल्हापूर' }
  ];

  stats = [
    { number: '1000+', label: 'समाधानी रुग्ण', icon: 'fas fa-users' },
    { number: '98%', label: 'यशस्वी उपचार', icon: 'fas fa-percent' },
    { number: '15+', label: 'वर्षे अनुभव', icon: 'fas fa-calendar-alt' },
    { number: '24/7', label: 'सेवा उपलब्धता', icon: 'fas fa-clock' }
  ];

  workingHours = [
    { day: 'सोमवार - शनिवार', hours: 'सकाळी 9:00 - संध्याकाळी 8:00' },
    { day: 'रविवार', hours: 'सकाळी 10:00 - दुपारी 2:00' }
  ];
}