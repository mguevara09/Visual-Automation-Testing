pipeline {
    agent {
        docker {
            image 'catsoss/node-headless-chrome:latest' 
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
