pipeline {
    agent {
        docker {
            image 'node:12' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Install LibXss1') {
            steps {
                sh 'apt update && apt install libxss1'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm t' 
            }
        }
    }
}
