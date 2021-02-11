pipeline {
    agent {
        docker {
            image 'armno/node-chromium:11.6.0-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm t' 
            }
        }
    }
}
