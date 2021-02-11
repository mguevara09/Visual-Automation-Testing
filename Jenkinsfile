pipeline {
    agent {
        docker {
            image 'backstopjs/backstopjs:5.0.4' 
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
