// <copyright file="IUserRepository.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data
{
    using System.Threading.Tasks;

    using Acme.Productivity.Pomodoro.Core;

    /// <summary>
    /// Manage the users.
    /// </summary>
    public interface IUserRepository
    {
        /// <summary>
        /// Authenticate the user.
        /// </summary>
        /// <param name="userName">The user name.</param>
        /// <param name="password">The password of the user.</param>
        /// <returns>The completed use if correct, null if invalid credentials.</returns>
        Task<AuthenticatedUser> AuthenticateAsync(string userName, string password);
    }
}