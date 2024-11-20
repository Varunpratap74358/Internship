const studentFAQs = [
    {
      category: "General Questions",
      questions: [
        { question: "What should I do if I miss a class?", answer: "Contact your instructor or classmates for notes and updates." },
        { question: "How can I manage my time effectively?", answer: "Use a planner, prioritize tasks, and avoid procrastination." },
        { question: "What should I do if I feel stressed about studies?", answer: "Talk to a counselor, take breaks, exercise, and practice mindfulness." },
        { question: "How do I contact my teacher outside of class?", answer: "Use email, official portals, or attend office hours." }
      ]
    },
    {
      category: "Academic Queries",
      questions: [
        { question: "What are the attendance requirements?", answer: "Check your institution’s policy; typically, it ranges from 75% to 85%." },
        { question: "How can I improve my grades?", answer: "Attend classes regularly, participate actively, and seek help when needed." },
        { question: "How do I access library resources?", answer: "Visit the library portal or speak to the librarian for guidance." },
        { question: "Can I retake an exam if I fail?", answer: "Review your institution’s exam retake or supplementary policy." },
        { question: "What should I do if I face difficulty understanding a subject?", answer: "Attend extra tutoring sessions, form study groups, or seek online resources." }
      ]
    },
    {
      category: "Career and Internship",
      questions: [
        { question: "How can I find internships while studying?", answer: "Use platforms like LinkedIn, Internshala, or consult your placement cell." },
        { question: "What courses can enhance my career prospects?", answer: "Consider certifications in trending fields like AI, Data Science, Web Development, etc." },
        { question: "When should I start preparing for job placements?", answer: "Start in the second or third year of your program." },
        { question: "How do I create a professional resume?", answer: "Highlight your skills, internships, projects, and achievements." },
        { question: "What extracurricular activities can boost my career?", answer: "Participate in competitions, clubs, community service, and hackathons." }
      ]
    },
    {
      category: "Campus Life",
      questions: [
        { question: "How do I join student organizations or clubs?", answer: "Look for announcements or contact club coordinators." },
        { question: "What events can I participate in on campus?", answer: "Check the event calendar for cultural fests, seminars, and sports competitions." },
        { question: "Where can I get help with housing or accommodation issues?", answer: "Contact the student housing office or warden." },
        { question: "What facilities are available on campus?", answer: "Libraries, labs, gyms, cafeterias, and medical centers are commonly available." }
      ]
    },
    {
      category: "Finance and Scholarships",
      questions: [
        { question: "How do I apply for a scholarship?", answer: "Visit the scholarship portal or consult your academic counselor." },
        { question: "Can I pay my fees in installments?", answer: "Inquire with the finance department for payment options." },
        { question: "Are there part-time job opportunities on campus?", answer: "Check with the student employment office." }
      ]
    },
    {
      category: "Technology and Resources",
      questions: [
        { question: "What should I do if I face technical issues with the online portal?", answer: "Contact IT support or the helpdesk." },
        { question: "How can I access online classes and materials?", answer: "Use the provided login credentials to access the learning management system (LMS)." },
        { question: "What apps or tools are helpful for students?", answer: "Notion, Trello, Grammarly, and Google Drive are great for productivity." }
      ]
    },
    {
      category: "Personal Development",
      questions: [
        { question: "How can I improve my communication skills?", answer: "Join public speaking clubs, take workshops, or practice regularly." },
        { question: "What are the best ways to network with peers and professionals?", answer: "Attend workshops, join LinkedIn, and actively participate in discussions." },
        { question: "How do I maintain a balance between academics and personal life?", answer: "Set boundaries, plan your schedule, and stay organized." }
      ]
    }
  ];
  
  
  const faqContainer = document.getElementById("faq-container");
  
  // Function to render FAQs dynamically
  function renderFAQs() {
    studentFAQs.forEach((section) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category");
      categoryDiv.textContent = section.category;
  
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("questions");
  
      section.questions.forEach((q) => {
        const question = document.createElement("p");
        question.classList.add("question");
        question.textContent = q.question;
  
        const answer = document.createElement("p");
        answer.classList.add("answer");
        answer.textContent = q.answer;
  
        // Toggle answer visibility on question click
        question.addEventListener("click", () => {
          answer.classList.toggle("show");
        });
  
        questionDiv.appendChild(question);
        questionDiv.appendChild(answer);
      });
  
      faqContainer.appendChild(categoryDiv);
      faqContainer.appendChild(questionDiv);
    });
  }
  
  // Initialize FAQ rendering
  renderFAQs();
  