import { Application } from '@hotwired/stimulus'

/*
  Added to fix typescript error for window.Stimulus
*/
declare global {
  interface Window {
    Stimulus: Application
  }
}

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

export { application }
