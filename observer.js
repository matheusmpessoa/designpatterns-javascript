const JobPost = title => ({
  title: title
});

class JobObserver {

  constructor(name) {
    this.name = name;
  }

  notifyNewJobPost(jobPost) {
    console.log(this.name, 'foi notificado sobre uma nova vaga de:', jobPost.title);
  }
}

class JobBoard {

  constructor() {
    this.subscribers = [];
  }

  subscribeToNewJobs(jobSeeker) {
    this.subscribers.push(jobSeeker);
  }

  addJob(jobPosting) {
    this.subscribers.forEach(subscriber => {
      subscriber.notifyNewJobPost(jobPosting);
    })
  }
}

const matheusPessoa = new JobObserver('Matheus Pessoa');
const joaoPedro = new JobObserver('Joao Pedro');
const gustavoBrandi = new JobObserver('Gustavo Brandi');

const jobBoard = new JobBoard();
jobBoard.subscribeToNewJobs(matheusPessoa);
jobBoard.subscribeToNewJobs(joaoPedro);
jobBoard.subscribeToNewJobs(gustavoBrandi);

jobBoard.addJob(JobPost('Engenheiro de sofware'));
jobBoard.addJob(JobPost('Designer'));
