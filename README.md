![Logo_Animation](https://github.com/user-attachments/assets/1cfb1872-b4ba-45b2-bc87-2e14820deb91)

# Lawgic: Your Reliable Partner
Welcome to the our project, we Team "BadallWAlle" are delighted to have you here!
It's a solution for a problem statement provided in GenAI Hackathon which is using "Generative AI for Demystifying Legal Documents"

## Overview
This project rose from the need of understanding Legal documents—such as rental agreements, loan contracts, and terms of service—are often filled with complex, impenetrable jargon that is incomprehensible to the average person. This creates a significant information asymmetry, where individuals may unknowingly agree to unfavorable terms, exposing them to financial and legal risks. There is a pressing need for a tool that can bridge this gap, making essential legal information accessible and understandable to everyone, from everyday citizens to small business owners. Here comes "Lawgic", an AI-Powered application that helps its users with legal documents! It's main task is to provide its users clear summaries, explanation of complex clauses, and answering user queries in a simple, yet practical manner which empowers them to make clear, sound and informed decisions thereby empowering them

## Features
Some of the Lawgic amazing abilities are:
- Providing end to end conversation encryption.
- Find faults within case documents in accordance to "Indian Laws".
- Summarizing the case and translates it into simple language.
- Allows user to use its insights to make basic judgements from case in respect to the user's queries.

## System Architecture and Component Overview
### WireFrame:
- **Welcome Page**:
  ![WhatsApp Image 2025-09-21 at 8 09 24 PM](https://github.com/user-attachments/assets/212dd400-19fe-47ec-9564-ce3d2893c944)

  - This is the landing page for Lawgic, designed to greet users and offer two distinct ways to interact: Chat Mode and Voice Mode. It features clear branding with the Lawgic logo, and provides quick access to login and signup actions. The main focus is on user-centric interaction, inviting users to choose their preferred method for engaging with the application.

- **Upload Document Page**:
  ![WhatsApp Image 2025-09-21 at 8 10 18 PM](https://github.com/user-attachments/assets/522c9593-edb8-42f8-85c8-7dc087461bc4)

  - This wireframe illustrates the document upload flow. Users can easily upload legal documents such as rental agreements, loan contracts, or terms of service for analysis. The page supports recent file history, enabling users to quickly access recently uploaded documents. Visual cues like cloud upload icons and a clean layout simplify the experience.

- **Analysis & Interaction Page**:
![WhatsApp Image 2025-09-21 at 8 10 26 PM](https://github.com/user-attachments/assets/79b8ae55-ec2e-43d3-ae8b-81024bb8aa8a)

   - The core interaction page presents the original legal document on one side and the AI-generated simplified summary on the other. Users can read both views and ask questions directly about the document, receiving clear, AI-powered explanations. The design also highlights the application's commitments to end-to-end encryption and compliance with Indian law.
### Process Flow:
![696c5fcd-773a-4ecc-983e-970d1d5eb463](https://github.com/user-attachments/assets/1feba29c-42ac-466d-a47b-7fba98eab049)

- **Process Overview**:
   - The flow starts when a user initiates an interaction with Lawgic, providing input by either uploading a legal document or pasting its text.
   - The system receives and acknowledges the uploaded file or pasted text, preparing the document for AI processing.
   - Lawgic's AI analyzes the document, generating a summary and extracting explanations of individual clauses, allowing the user to understand complex legal terms easily.
   - The AI then presents these summaries and clause explanations to the user in an accessible format.

- **User Query and Interaction**:
   - The diagram highlights that after the initial summary and explanations, users may have further queries regarding the document's content.
   - If users have questions, the AI provides deeper, more detailed explanations and answers their legal queries interactively.
   - Once all questions are addressed or the user chooses to end, the interaction successfully concludes with clear answers and demystified legal language.

- **Key Stages**:
   - Upload/Paste Document: Start by uploading or pasting a legal document.
   - AI Processing: The AI engine analyzes and interprets the document.
   - Document Summary: A concise overview is generated for easy understanding.
   - Clause Explanations: Detailed explanations of individual clauses are provided.
   - User Query Handling: Users can ask questions for further clarification.
   - Final Answers/End Interaction: AI responds to queries, and the session ends when the user is satisfied.
### Architectural Diagram:
![5b1fd7ca-0f6a-4a59-9d13-c0ddb51d3ee2](https://github.com/user-attachments/assets/76a1a5f6-8b65-48f3-8461-054a36ba7e17)

- **User Interface**:
   - The interface is available via web and mobile apps, supporting features like document upload, text paste, summary viewing, and query submission.
   - All user actions generate API requests handled by backend services for processing.

- **Backend Services**:
   - The document ingestion service manages file uploads and text extraction, using OCR technologies for non-text files.
   - Uploaded documents are stored and passed to background workers for further processing, facilitating efficient and scalable handling of user requests.
   - API Gateway and load balancer distribute incoming requests, enhancing system reliability and performance.
   - A caching layer speeds up repetitive tasks and access to frequently used data.

- **AI Processing Engine**:
   - The AI engine utilizes a database for storing legal data and processing results.
   - It applies NLP techniques to identify clauses and preprocess documents, followed by machine learning models that highlight key legal clauses.
   - Legal jargon is explained using an extensive knowledge base, and contextual question answering is performed via a searchable vector database, offering users clear, precise responses.

- **User Authorization & Authentication**:
   - User identity, history, and processed insights are managed for personalized experiences and secure access, backed by a dedicated user database.

- **External Integrations**:
   - The architecture connects with legal knowledge bases, cloud AI APIs (such as GPT-4), and email/notification services, enabling robust analytics and communication.

## Demo/Screenshots
### Welcome Page
<img width="1920" height="1080" alt="Screenshot From 2025-09-21 19-22-02" src="https://github.com/user-attachments/assets/a5dd98f9-894f-46bf-989c-345e9170f42f" />

### Login and Signup Page
<img width="1920" height="1080" alt="Screenshot From 2025-09-21 19-21-43" src="https://github.com/user-attachments/assets/18c999ea-52cf-461f-9354-8889d7095b20" />
<img width="1920" height="1080" alt="Screenshot From 2025-09-21 19-21-50" src="https://github.com/user-attachments/assets/0b60193b-7788-4603-a251-546fbe238a0a" />

### Showcase Page
<img width="1920" height="1080" alt="Screenshot From 2025-09-21 19-21-15" src="https://github.com/user-attachments/assets/3aeeda18-f8a6-4e84-9bfb-85fefc7fbd05" />

## Usage
- Link: **https://lawgicai.bytexl.live/**
## Tech Stack
### UI/UX:
- **Canva**
   - Mock Idea Generation and Designing
- **Figma**
   - Design Implementation and Process Viewing
### Google Cloud Services
- **Document AI**:
  -  For extracting text and structure from uploaded documents and scanned PDFs.
- **Vertex AI**:
  - For custom machine learning model training, inference, and document analysis.
- **Speech-to-Text API**:
  - For converting user voice queries to text.
- **Text-to-Speech API**:
  - For generating voice answers from AI responses.
- **Cloud Storage**:
  - For storing uploaded documents and training data.
- **Cloud Run**:
  - For hosting backend services and APIs.
- **Firestore**:
  - For storing metadata, processed insights, and user history.
- **Cloud Functions**:
  - For serverless processing tasks (e.g., triggering workflows).
### Backend Technologies
- **Python**:
  - Primary backend language for cloud integration, ML training, and document processing.
- **Flask / FastAPI**:
  - Web frameworks for building RESTful APIs.
- **PyPDF2 / pdfplumber**:
  - For local PDF extraction and manipulation (where needed).
- **Pandas, NumPy**:
  - For data manipulation and preprocessing in ML pipelines.
- **Transformers, Torch (PyTorch)**:
  - For training custom NLP models with Vertex AI.
### Frontend Technologies
- **HTML5, CSS3, JavaScript**:
  - Standard web stack for building UI.
- **React.js or Vue.js**:
  - Frameworks for dynamic, responsive client UI.
- **Bootstrap or Material-UI**:
  - For styling and layout.
- **Web Speech API**:
  - For browser-based voice input/output integration.
### System Architecture & Data Flow
- Modular microservices pattern using Google Cloud serverless and containerized solutions.
- Multimodal user input support: PDF upload, speech, and text queries.
- Integration with external knowledge bases for legal expertise.


## Contributors

| Name            | Role        | GitHub Username      |
|-----------------|-------------|----------------------|
| Garv Garg       | Team Leader | @CloudwithGarv       |
| Kishan Sharma   | Backend Dev | @kishhannnn          |
| Rajveer Arora   | UI/UX       | @Rajveer0725         |
| Harsh Sharma    | Frontend Dev| @Demonvesper         |

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- Vertex AI Integration: **Google Cloud Tech**
- Dataset: **Legislative.gov.in**,**rbi.org.in**
- Aplication Development: **Documentation on Google Cloud Skill Boost**
