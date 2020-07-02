export interface Observer {
  topic: string;
  cb: (payload: any) => void;
}

export class ObserverSubject {
  private observers: Observer[] = [];
  private name = '';

  constructor(name: string) {
    this.name = name;
    this.log('init');
  }

  private log(...message: any) {
    console.info(`[ObserverSubject: ${this.name}] `, ...message);
  }

  public attach(observer: Observer) {
    this.observers.push(observer);
    this.log('Attached', observer);
  }

  public detach(observerToRemove: Observer) {
    this.observers = this.observers.filter((observer) => observerToRemove !== observer);
    this.log('Detached', observerToRemove);
  }

  public notify(topic: string, payload: any) {
    let countNotified = 0;
    this.observers.forEach((observer: Observer) => {
      if (observer.topic === topic) {
        observer.cb(payload);
        countNotified += 1;
      }
    });
    this.log(`Notified ${countNotified} observers.`, topic, payload);
  }
}

export default ObserverSubject;
