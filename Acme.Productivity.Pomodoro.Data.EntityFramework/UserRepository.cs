// <copyright file="UserRepository.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework
{
    using System;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Core;
    using Acme.Productivity.Pomodoro.Data.EntityFramework.Model;

    public class UserRepository : IUserRepository
    {
        private readonly PomodoroContext _context;

        public UserRepository(PomodoroContext context)
        {
            this._context = context;
        }

        public AuthenticatedUser Authenticate(string userName, string password)
        {
            var userDb = this._context.Users.SingleOrDefault(x => x.UserName == userName);

            return new AuthenticatedUser
            {
                Id = Guid.NewGuid(),
                Name = userName
            };
        }
    }
}