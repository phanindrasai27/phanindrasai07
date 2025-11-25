---
title: "All about how to enter Full Stack AI and how to get Cracked at it. [My Guide]"
pubDate: "2025-05-11"
canonicalUrl: "https://looper27.bearblog.dev/all-about-how-to-enter-full-stack-ai-and-how-to-get-cracked-at-it-my-guide/"
---

Note: This is not how I learned everything. As a generalist, I’ve often been distracted and explored much of tech, learning a lot by flowing along with my curiosity. Sometimes I dive into DevOps, sometimes cloud, sometimes API integrations, and sometimes business contexts. My path here has been a complete flow of curiosity, with a distracted mind and an obsession to understand things in detail. This is a very rough and quick guide for anyone entering AI (the full stack of analytics, ML, DL, LLMs, and everything DATA) on how they should learn and flow through it all.

---

1. **Start with Math**: Math is so important. Whatever the language, understand that all the data you see goes into models as numbers. And, as you know, it’s eventually converted to binary code and executed. All data can be changed into numbers, so learn linear algebra, calculus for a deeper understanding, optimization in math, and the most important ones: statistics, probability, and permutations/combinations. If you want to dig even deeper, go for information theory and game theory, so you’ll understand how decisions are made in the real world and how everything is interconnected.

---

2. **Data & Domain Understanding**: Understand how data is structured in the world because AI is all about data. If you don’t understand how to use it, everything is useless. By domain, by use case, and by problem, the application of data changes. In finance, fraud data will always be imbalanced, with real fraud cases often below 5% or even lower for larger companies—then, what do you do? In eCommerce, there will be thousands of columns—how do you decide which ones matter? In domains like healthcare, data is so sparse—what do you do then? Always remember, without problems, all these models are useless. Think in terms of problems, data, domains, and use cases rather than just applying models blindly.

---

3. **Feature Engineering**: This is my favorite part and where you’ll spend hours of your job. If data science or finding a solution is a thing, this is literally 70-80% of it. If you mess this up, it’s over. For all the questions I asked in data and domain understanding, your answer will come into play here. How do you fill null values? What do you do when you have less data? How do you handle imbalanced data? How do you optimize data to flow smoothly into models? If you have thousands of columns, which ones do you choose? And if every column is important, how do you reduce the density of the data? From taking raw data to feeding it into the models, everything happens here, and you should be the most skilled in this area if you want to stand out in AI or data.

---

4. **Models**: Basic heuristic models are completely rule-based, more like chess. Then we get into applied statistics on data, which will tell you how diverse the data is. This is called EDA (Exploratory Data Analysis) or descriptive analytics, where you learn from the data. From there, it moves into supervised tabular ML models, unsupervised tabular ML models, basic RL (Reinforcement Learning) models, DL (Deep Learning) models, CNNs (Convolutional Neural Networks), NLP (Natural Language Processing), CV (Computer Vision), speech processing, word embeddings, and voice-based DL models. Finally, it ends with transformers, where the whole arc and aura of AI changed. Basic ML models are heavily driven by math, which is where explainable ML comes in—it’s easy, intuitive, and interesting to understand. You know why it’s overfitting or underfitting, you have great metrics to validate, and the interpretability is solid. But once you get into deep learning, everything is a black box. There’s no interpretability or explainability. You just make educated guesses and try to optimize to get the best accuracy and fitting. With deep learning, you can either dive deep and understand everything or just grasp the basics and leave it at that (unless you’re in research). If you’re into research, the path is different, and you need to go much deeper into the math.

**Note**: After this point, you have two options: either go into research or apply AI. The line here splits. Many LLMs (Large Language Models) need tons of research, such as validation, architecture, data, pre/post training, and more. The applied side is all about using AI for consumer-facing solutions, fine-tuning, and quick business AI solutions. The future is AI, and both sides are important.

---

5. **LLMs, RAGs, and the Current Era**: If you’ve made it this far, remember that you’ll either be an applied person, mastering use cases, problem-solving, and understanding where to apply what model, or a math/research person, diving deep into the architectures, researching deeper math, fine-tuning models, publishing papers, etc. I lean more toward the real-world practical side, and though I understand the deeper stuff, I haven’t spent much time in the research space. Remember, LLMs are just next-word predictors on steroids. We don’t know how they work in-depth. Transformers can just remember things end-to-end, and with high probability, predict the next word. We don’t fully understand the architectures of many LLMs unless they’re open-sourced. The application is all about making them work for what you need, manipulating them to fit your needs. You can’t train an LLM yourself—you need heavy GPUs, data, and computing power. So, you adjust its character, its “costume,” and fine-tune it. The more you dig into fine-tuning, the heavier the compute required. Understanding how they are pre-trained, post-trained, fine-tuned, and how RLHF (Reinforcement Learning with Human Feedback) makes them behave ethically and morally is essential. A lot of manipulation happens with LLMs, and you're not hitting the core instance itself. The true power of most LLMs comes from tools like interpreters, web search, reasoning, memory, context windows, input/output length, and more.

---

**Note**: AI engineering in the space of RAGs (Retrieval-Augmented Generation), LLMs, and Agentic AI is much deeper than you expect. This industry is thriving, and I’ve just scratched the surface. Every day, a new paper, research, or technology pops up, so keep exploring.

---

**System Design & Under the Hood**: I believe anything you do, you need to understand how things work from a bird’s-eye view. That’s what system design is about—understanding how each part works. Today, everything is engineering, and I don’t think you’ll be hired if you can’t save a model, create an API out of it to run its inference, and make deployment easy. You need to make your models and systems consumer-ready. Outside of AI, if there’s one thing I understand well, it’s DevOps, data pipelines, APIs, and cloud systems—how big companies handle data, from sourcing to storage, streaming, pipelines, experiments, deployment, and more. Unstructured data is stored differently compared to tabular data, and real-time or batch-based training might be needed for models. Models don’t stay the same—they evolve, trends shift, and inference accuracy changes.

---

**Constraints in AI Overall**:

1. **Fundamentals Are Everything**: AI is contextual, trendy with business, economy, industry, domain, and new techniques, tools, and services are popping up weekly. But if your base and fundamentals are strong, you’ve got a solid foundation.
2. **Validation Is Hard**: Validation is tricky in AI. In core ML models, there are plenty of metrics and techniques, but once you get into DL, LLMs, and beyond, it gets complex, and there are no standardized validation metrics. You’ll have to create your own validation points based on your understanding.
3. **Data Is Everything**: If the data you collect is garbage, everything is useless. If your company doesn’t automate data collection or source everything digitally, the work you do will often be useless. If consumers are typing manually and it doesn’t validate or benefit the data, it’ll eventually corrupt your database.
4. **Curiosity Is Key**: If you're learning for a big paycheck or a stable job, you're making a mistake. Shift to dev, cloud, or DevOps roles instead. They’re more predictable, while AI is a long game.
5. **Impact Is Real**: AI is full of trade-offs, and that's why it's called decision science. The insights you generate can change the whole business strategy.
6. **Don’t Fall Into Resource Traps**: Don’t get stuck in a loop of tutorials and videos. Until you get your hands dirty, nothing matters. Play with data, try different solutions, and get things done.

---

**What Should You Do Once You Understand Everything?** Do projects, go to Kaggle, and you’ll learn fast. Kaggle is the best platform for hands-on learning—learn from others, experiment with different techniques, and get dirty with the data.

---

**Best Resources**: There’s never just one best resource. Some may be great for you, others may not. Maybe you’ll learn better from videos, blogs, hands-on coding, or GitHub repos. Explore different resources, whether videos, blogs, Kaggle, courses, or hands-on practice.

Some resources that might help:
- [My blog on Spiral Learning](https://medium.com/@phanindra_sai27/the-perfect-way-of-learning-data-science-6fa64d75886f)
- [Kaggle](https://www.kaggle.com/)
- [Hugging Face](https://huggingface.co/)
- [Andrew Ng's YouTube Channel](https://www.youtube.com/channel/UCNU_lfiiWBdtULKOw6X0Dig)
- [CampusX](https://www.youtube.com/@campusx-official)
- [Byte Byte Go](https://bytebytego.com/)

---

Even after all this, remember, everyone’s journey is different. Don’t follow advice blindly—do your own research, especially now with AI. You might get obsessed with one way of learning, and that might change your curve. Stay curious, stay obsessed, and never conclude. Just explore.

---